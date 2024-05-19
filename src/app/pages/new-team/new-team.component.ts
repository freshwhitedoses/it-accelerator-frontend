import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../core/services/user.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {MatChipInputEvent} from "@angular/material/chips";
import {Location} from "@angular/common";
import {TeamResponse} from "../../core/models/response";
import {TeamRequest} from "../../core/models/team";

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss']
})
export class NewTeamComponent implements OnInit{
  teamForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private notifierService: NotifierService,
    private location: Location
  ) {
  }
  keywords: string[] = [];

  ngOnInit(): void {
    this.teamForm = this.fb.group({
      name: ['', Validators.required],
      userNames: [[], Validators.required],
    })
  }
  get name(): any {
    return this.teamForm.get('name')
  };
  get userNames(): any {
    return this.teamForm.get('userNames')
  };
  submit() {

  }

  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.keywords.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  goBack() {
    this.location.back()
  }

  saveTeam() {
    if(this.teamForm.valid) {
      let team: TeamRequest = {
        userNames: this.userNames.value,
        name: this.name.value
      }
       this.userService.createTeam(team).subscribe({
        next: (r) => {
          this.notifierService.notify('success', 'Команда успешно добавлена!');
          this.location.back()
        },
        error: () => {
        }
      })
    }
  }
}
