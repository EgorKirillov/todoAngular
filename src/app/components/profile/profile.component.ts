import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Profile, ProfileService } from '../../services/profile.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'tdl-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private profileService: ProfileService) {}

  profile$!: Observable<Profile>

  navigateToUsers() {
    this.router.navigate(['/users'])
  }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId')
    if (userId) {
      this.profile$ = this.profileService.getprofile(userId)
    }
  }
}
