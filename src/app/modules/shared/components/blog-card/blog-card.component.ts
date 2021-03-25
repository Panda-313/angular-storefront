import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BlogPost} from "../../interfaces/blog-post.interface";

@Component({
  selector: 'sf-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogCardComponent implements OnInit {
  @Input() blogPost!: BlogPost;
  @Input() showActionBtn = false;
  @Input() actionBtnText = '';
  @Output() clickActionBtn = new EventEmitter<BlogPost>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onActionBtnClick(): void {
    this.clickActionBtn.emit(this.blogPost);
  }
}
