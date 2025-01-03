// src/product/product.controller.ts
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() product: Product): Promise<Product> {
    return this.productService.create(product);
  }
}
