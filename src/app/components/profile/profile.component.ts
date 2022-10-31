import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Profile, ProfileService } from '../../services/profile.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'tdl-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private profileService: ProfileService) {}

  profile$!: Observable<Profile>

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId')
    if (userId) {
      this.profile$ = this.profileService.getprofile(userId)
    }
  }
}
