import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  // var
  token
  user
  subscriber

  /*validation on editing*/
  myForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  constructor(private myActivated:ActivatedRoute, private myService: UsersService) { }

  confirmpw() {
    console.log(this.myForm.controls)
    if (this.myForm.valid && this.myForm.value.password === this.myForm.value.confirmPassword) {
      console.log("valid")
      const userpw = {
        "password": this.myForm.value.password,
      }
      const tokencrpw= this.token
      const userpwJson = JSON.stringify(userpw)
      this.subscriber = this.myService.crnPassword(userpwJson,tokencrpw)
      .subscribe((userpwJson) => {
        console.log(userpwJson);
      },
        (error) => {
          console.log(error);
        }
      )

    }
    else {
      console.log("invalid")
    }
  }

  ngOnInit(): void {
    console.log(this.myActivated.snapshot.params.token);
    this.token = this.myActivated.snapshot.params.token
    // this.token
  }

}
