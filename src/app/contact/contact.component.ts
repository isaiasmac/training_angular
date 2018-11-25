import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

	messageFor: FormGroup;
	submitted = false;
	success = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  	this.messageFor = this.formBuilder.group({
  		name: ['', Validators.required],
  		message: ['', Validators.required]
  	});
  }

  onSubmit() {
  	this.submitted = true

  	if (this.messageFor.invalid) {
  		return;
  	}

  	this.success = true
  }

}
