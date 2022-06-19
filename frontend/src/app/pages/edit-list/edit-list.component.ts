import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { TaskService } from "src/app/task.service";

@Component({
  selector: "app-edit-list",
  templateUrl: "./edit-list.component.html",
  styleUrls: ["./edit-list.component.scss"],
})
export class EditListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}

  listId: string;
  title = "";

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.listId = params.listId;

      this.taskService.getList(this.listId).subscribe((data) => {
        this.title = data.title;
        console.log(data);
        // this.router.navigate(["/lists", this.listId]);
      });
    });
  }

  updateList(title: string) {
    this.taskService.updateList(this.listId, title).subscribe(() => {
      this.router.navigate(["/lists", this.listId]);
    });
  }
}
