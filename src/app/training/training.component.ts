import { Component, OnInit } from '@angular/core';

interface Passenger {
	id: number;
	fullname: string;
	checkedIn: boolean;
	checkDate?: number; // number | null
}

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})

export class TrainingComponent implements OnInit {

	name: string = '';
	passengers: Passenger[] = [
		{
			id: 1,
			fullname: 'Isaias',
			checkedIn: true,
			checkDate: 1490742000000
		},
		{
			id: 2,
			fullname: 'Steve',
			checkedIn: true,
			checkDate: 1493742000001
		},
		{
			id: 3,
			fullname: 'Wayne',
			checkedIn: false,
			checkDate: 1498742040001
		},
		{
			id: 4,
			fullname: 'Bill',
			checkedIn: true,
			checkDate: null
		}
	]

  constructor() { }

  ngOnInit() {
  }

  handleClick(value: string) {
  	console.log(value)
  }

  handleChange(value: string) {
  	this.name = value
  }
}
