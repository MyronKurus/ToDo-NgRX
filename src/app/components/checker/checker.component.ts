import {Component, OnChanges, OnInit} from '@angular/core';
import {PermissionService} from '../../services/permission.service';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.css']
})
export class CheckerComponent implements OnChanges {

  canAdd;
  canRemove;

  constructor(private permissionService: PermissionService) {
    this.permissionService.getPermissions().subscribe(items => {
      this.canAdd = items.canAdd;
      this.canRemove = items.canRemove;
    });
  }

  ngOnChanges() {

  }

  onAddChange() {
    this.permissionService.switchAddPermission();
  }

  onRemoveChange() {
    this.permissionService.switchRemovePermission();
  }

}
