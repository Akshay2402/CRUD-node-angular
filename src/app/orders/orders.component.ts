import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { RestService } from '../rest.service';
import { FormBuilder } from '@angular/forms';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  @ViewChildren(MatTable) table: QueryList<any>;
  orders: any;
  modelTitle;
  displayedColumns: string[] = ['orderNumber', 'orderDueDate', 'customerPhone',
  'customerBuyername', 'customerAddress', 'orderTotal', 'action'];
  dataSource;
  removeOrder;

  addOrder = this.fb.group({
    orderDueDate: [''],
    customerPhone: [''],
    customerBuyername: [''],
    customerAddress: [''],
    orderTotal: [''],
  });

  updateOrder = this.fb.group({
    orderDueDate: [''],
    customerPhone: [''],
    customerBuyername: [''],
    customerAddress: [''],
    orderTotal: [''],
  });

  constructor(private rest: RestService, private fb: FormBuilder) { }

  ngOnInit() {
    this.rest.getAllOrders().subscribe((response: any) => {
      console.log(response);
      this.orders = response.orders;
      this.dataSource = this.orders;
    });
  }

  createOrder() {
    this.modelTitle = 'Add New Order!';
  }

  deleteOrder(order) {
    console.log(order);
    this.removeOrder = order;
  }
  confirmDelete() {
    const orderNumber = {orderNumber: this.removeOrder.orderNumber};
    this.rest.deleteOrder(orderNumber).subscribe((response: any) => {
      this.orders = response;
      this.dataSource = this.orders;
    });
  }

  onSubmit() {
    this.rest.addOrder(this.addOrder.value).subscribe((response: any) => {
    this.orders.push(response);
      this.dataSource = this.orders;
      this.table.forEach((table: MatTable<any>) => {
        table.renderRows();
      });
    });
  }

  editOrder(element) {
    this.updateOrder = this.fb.group({
      orderDueDate: [element.orderDueDate],
      customerPhone: [element.customerPhone],
      customerBuyername: [element.customerBuyername],
      customerAddress: [element.customerAddress],
      orderTotal: [element.orderTotal],
      orderNumber: [element.orderNumber]
    });
  }

  updateOrderDetails() {
    console.log(this.updateOrder.value);
    this.rest.updateOrder(this.updateOrder.value).subscribe((response: any) => {
      this.orders.forEach((order: any) => {
        if (order.orderNumber === response.orderNumber) {
          order.orderDueDate = response.orderDueDate;
          order.customerBuyername = response.customerBuyername;
          order.customerAddress = response.customerAddress;
          order.customerPhone = response.customerPhone;
          order.orderTotal = response.orderTotal;
        }
      });
      this.table.forEach((table: MatTable<any>) => {
        table.renderRows();
      });
    });
  }
}
