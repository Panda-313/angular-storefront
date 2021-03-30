import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {BlogPost} from "../../../shared/interfaces/blog-post.interface";

@Component({
  selector: 'sf-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPageComponent implements OnInit {
  mockedBlogPosts: BlogPost[] = [
    {
      blogPostId: '2131',
      blogPostTitle: 'Proin hendrerit',
      blogPostDate: new Date(),
      blogPostImageAlt: 'descr',
      blogPostImageSrc: 'https://place-hold.it/490x310'
    },
    {
      blogPostId: '213121c',
      blogPostTitle: 'Aenean vitae suscipit ',
      blogPostDate: new Date(),
      blogPostImageAlt: 'fwe21',
      blogPostImageSrc: 'https://place-hold.it/750x475'
    },
    {
      blogPostId: '213121c21e1',
      blogPostTitle: 'Praesent id ultricies',
      blogPostDate: new Date(),
      blogPostImageAlt: '21rf',
      blogPostImageSrc: 'https://place-hold.it/355x230'
    },
    {
      blogPostId: '213121c',
      blogPostTitle: 'Aenean vitae suscipit ',
      blogPostDate: new Date(),
      blogPostImageAlt: 'fwe21',
      blogPostImageSrc: 'https://place-hold.it/750x475'
    },
    {
      blogPostId: '213121c21e1',
      blogPostTitle: 'Praesent id ultricies',
      blogPostDate: new Date(),
      blogPostImageAlt: '21rf',
      blogPostImageSrc: 'https://place-hold.it/355x230'
    },
    {
      blogPostId: '213121c',
      blogPostTitle: 'Aenean vitae suscipit ',
      blogPostDate: new Date(),
      blogPostImageAlt: 'fwe21',
      blogPostImageSrc: 'https://place-hold.it/750x475'
    },
    {
      blogPostId: '213121c21e1',
      blogPostTitle: 'Praesent id ultricies',
      blogPostDate: new Date(),
      blogPostImageAlt: '21rf',
      blogPostImageSrc: 'https://place-hold.it/355x230'
    },
    {
      blogPostId: '213121c',
      blogPostTitle: 'Aenean vitae suscipit ',
      blogPostDate: new Date(),
      blogPostImageAlt: 'fwe21',
      blogPostImageSrc: 'https://place-hold.it/750x475'
    },
    {
      blogPostId: '213121c21e1',
      blogPostTitle: 'Praesent id ultricies',
      blogPostDate: new Date(),
      blogPostImageAlt: '21rf',
      blogPostImageSrc: 'https://place-hold.it/355x230'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
