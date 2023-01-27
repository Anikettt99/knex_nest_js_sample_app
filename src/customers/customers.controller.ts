import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Req,
  Res,
  UseGuards,
  Inject,
} from '@nestjs/common';
import { RequestGuard } from 'src/core/guards/request.guard';
import { Request } from 'src/core/http/Request';
import { Response } from 'src/core/http/Response';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { Knex } from 'knex';

@UseGuards(new RequestGuard())
@Controller('customers')
export class CustomersController {
  constructor(
    private customersService: CustomersService,
    @Inject('DATABASE_CONNECTION') private knex: Knex,
  ) {}

  @Post('/')
  async createCustomer(@Body() body: CreateCustomerDto) {
    const customer = await this.customersService.create(body);
    return customer;
  }

  @Get('/test1')
  async test1() {
    /* const data = await this.knex
      .select('students.first_name', 'papers.title', 'papers.grade')
      .from('students')
      .join('papers', function () {
        this.on('students.id', '=', 'papers.student_id');
      })
      .orderBy('papers.grade', 'desc');*/
    //select first_name , ifnull(title , "MISSING") , ifnull(grade,0)
    /*  const data = await this.knex
      .select('students.first_name', 'papers.grade')
      .select(this.knex.raw('ifnull(title , "MISSING") as title'))
      .select(this.knex.raw('ifnull(grade,0) as grade'))
      .from('students')
      .leftJoin('papers', function () {
        this.on('students.id', '=', 'papers.student_id');
      });*/
    /* const data = this.knex
      .select('first_name')
      .avg({ average: 'grade' })
      .from('students')
      .join('papers', function () {
        this.on('students.id', '=', 'papers.student_id');
      })
      .groupBy('first_name');*/
    const data = this.knex
      .select('first_name')
      // .select(this.knex.raw('IFNULL(avg(grade),0) as "average"'))
      .select(
        this.knex.raw(`IFNULL(avg(grade),0) as "average" ,
      CASE 
          WHEN IFNULL(avg(grade),0)>75 THEN 'passing'
          ELSE 'failing'
      END AS "passing_status"
      `),
      )
      .from('students')
      .leftJoin('papers', function () {
        this.on('students.id', '=', 'papers.student_id');
      })
      .groupBy('first_name');

    return data;
  }

  @Get('/test2')
  async test2() {
    /* const data = await this.knex
      .select('first_name', 'last_name')
      .count('rating as COUNT')
      .select(this.knex.raw('IFNULL(min(rating),0) as MIN'))
      .select(this.knex.raw('IFNULL(max(rating),0) as MAX'))
      .select(this.knex.raw('IFNULL(avg(rating),0) as AVG'))
      .select(
        this.knex.raw(`
        IF(count(rating)=0 , "INACTIVE","ACTIVE") as STATUS
      `),
      )
      .from('reviews')
      .rightJoin('reviewers', function () {
        this.on('reviewers.id', '=', 'reviews.reviewer_id');
      })
      .groupBy('first_name', 'last_name');*/

    const data = this.knex
      .select('title', 'rating')
      .select(this.knex.raw(`CONCAT(first_name, ' ' ,last_name) as Name`))
      .from('series')
      .innerJoin('reviews', function () {
        this.on('series.id', '=', 'reviews.series_id');
      })
      .innerJoin('reviewers', function () {
        this.on('reviewers.id', '=', 'reviews.reviewer_id');
      });

    return data;
  }

  @Get('/')
  async getAllCustomers() {
    console.log(__dirname);
    const customers = await this.customersService.fetchAll();
    return customers;
  }

  @Get('/total-amount')
  async totalAmount() {
    const data = await this.customersService.totalOrderAmount();

    return data;
  }

  @Get('/total-orders')
  async totalOrder() {
    const data = await this.customersService.totalNoOfOrders();
    return data;
  }

  @Get('/order-data/:id')
  async OrderData(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    // console.log(req.all());
    const data = await this.customersService.allOrdersData(parseInt(id));

    return res.send(data);
  }

  @Get('/:id')
  async getCustomer(@Param('id') id: string) {
    const customer = await this.customersService.fetchById(parseInt(id));
    return customer;
  }
}
