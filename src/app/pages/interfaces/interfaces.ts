export interface RespuestaToHeadLines{
    status: string;
    totalResults: number;
    articles:Article[];
}

export interface Article{
    source:Source;
    author?:string;
    title:string;
    description:string;
    url:string;
    urlToImage:string;
    publishedAt:string;
    content?:string;
}

export interface Source{
    id?:string;
    name:string;
}
export interface Feriados{
    status: string;
    data: Data[]
}
export interface Data{
    date: string;
    title: string;
    type: string;
    inalienable: boolean;
    extra: string;
}