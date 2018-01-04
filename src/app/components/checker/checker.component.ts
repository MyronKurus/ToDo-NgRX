import {Component, OnChanges, OnInit} from '@angular/core';
import {PermissionService} from '../../services/permission.service';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.css']
})
export class CheckerComponent {

  canAdd;
  canRemove;

  constructor(private permissionService: PermissionService) {
    this.permissionService.getPermissions().subscribe(items => {
      this.canAdd = items.canAdd;
      this.canRemove = items.canRemove;
    });
  }

  onAddChange(): void {
    this.permissionService.switchAddPermission();
  }

  onRemoveChange(): void {
    this.permissionService.switchRemovePermission();
  }

}
