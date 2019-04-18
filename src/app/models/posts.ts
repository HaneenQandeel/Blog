export interface IPost {
  title: string;
  body: string;
  Date: Date;
  author: string;
  category: {id: number , Name: string};
  comment: {id: number , comment: string};
  tags: [{id: number , title: string }];

}
