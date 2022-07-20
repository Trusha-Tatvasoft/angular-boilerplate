import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SnackbarService } from 'src/shared/services/snackbar.service';
import { UserDeleteDialogComponent } from '../../dialog/user-delete.dialog';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  pageSizeOption = [5, 10, 25, 50];
  itemsPerPage: number = this.pageSizeOption[0];
  currentPage = 1;
  totalCount = 10;
  displayedColumns = ['id', 'firstname', 'lastname', 'username', 'action'];
  dataSource = new MatTableDataSource();

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private snackbarService: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.getUserData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onPageChange(page: { pageIndex: number; pageSize: number }) {
    this.currentPage = page.pageIndex + 1;
    this.itemsPerPage = page.pageSize;
    this.getUserData();
  }

  getUserData() {
    this.userService
      .list(this.currentPage, this.itemsPerPage)
      .subscribe((res) => {
        this.dataSource.data = res;
        this.totalCount = 7;
      });
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(UserDeleteDialogComponent, {
      width: '400px',
      data: {
        id,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.deleteUser(id).subscribe((res) => {
          if (res) {
            this.snackbarService.open({
              message: 'User Deleted Successfully!',
              type: 'success',
              action: '',
              config: {},
            });
          } else {
            this.snackbarService.open({
              message: 'Something Went Wrong!',
              type: 'error',
              action: '',
              config: {},
            });
          }
        });
      }
    });
  }
}
