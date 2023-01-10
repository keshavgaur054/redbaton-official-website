import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PageService } from './page.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { FilterPageDto } from './dto/filter-page.dto';

@Controller('page')
export class PageController {
  constructor(private readonly pageService: PageService) { }

  @Post()
  create(@Body() createPageDto: CreatePageDto) {
    return this.pageService.create(createPageDto);
  }

  @Get()
  findAll(@Query() filterPageDto: FilterPageDto) {
    return this.pageService.findAll(filterPageDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pageService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePageDto: UpdatePageDto) {
    return this.pageService.update(id, updatePageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pageService.remove(id);
  }
}