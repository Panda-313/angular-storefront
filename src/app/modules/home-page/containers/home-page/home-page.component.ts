import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Product} from "../../../shared/interfaces/product.interface";
import {BlogPost} from "../../../shared/interfaces/blog-post.interface";

@Component({
  selector: 'sf-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
  //TODO remove mocked
  mockedProducts: Product[] = [
    {
      productPrice: 20.99,
      productTitle: 'First product',
      productImageAlt: 'description',
      productImageSrc: 'https://place-hold.it/365x425',
      productId: 'fea'
    },
    {
      productPrice: 25.99,
      productTitle: 'Second product',
      productImageAlt: 'description2',
      productImageSrc: 'https://place-hold.it/365x425',
      productId: 'fea'
    },
    {
      productPrice: 32.99,
      productTitle: 'Third product',
      productImageAlt: 'description3',
      productImageSrc: 'https://place-hold.it/365x425',
      productId: 'fea'
    }
  ];

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
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
