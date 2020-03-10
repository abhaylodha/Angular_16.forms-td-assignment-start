import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  subscriptionTypes: string[] = ['Basic', 'Advanced', 'Pro'];
  data: { email: string, password: string, subscriptionType: string }
    = {
      email: "", password: "", subscriptionType: ""
    }

  @ViewChild('formRef', { static: true }) formData: NgForm;

  onSubmit() {
    console.log(this.formData.value);
    this.data.email = this.formData.value.group_credentials.name_email;
    this.data.password = this.formData.value.group_credentials.name_password;
    this.data.subscriptionType = this.formData.value.name_subscriptionType;
    console.log(this.data);
  }

  suggestDeaults() {
    this.formData.setValue({
      group_credentials:
      {
        name_email: "a@b.c",
        name_password: "my_password"
      },
      name_subscriptionType: "Advanced"
    })
  }

  suggestSubscription() {
    this.formData.form.patchValue({
      name_subscriptionType: "Pro"
    })
  }
}
