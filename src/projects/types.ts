export type ProjectResult = {
  [key: string]: ProjectInfo;
};

export type ProjectInfo = {
  projectName: string;
  data: RootObject[];
};

export interface Created_by {
  object: string;
  id: string;
}

export interface Last_edited_by {
  object: string;
  id: string;
}

export interface Url {
  url: string;
}

export interface Cover {
  type: string;
  external?: Url;
  file?: Url;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Text {
  content: string;
  link?: any;
}

export interface Annotation {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Rich_text {
  type: string;
  text: Text;
  annotations: Annotation;
  plain_text: string;
  href?: any;
}

export interface Introduce {
  id: string;
  type: string;
  rich_text: Rich_text[];
}

export interface Multi_select {
  id: string;
  name: string;
  color: "default" | "gray" | "brown" | "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink";
}

export interface Skill {
  id: string;
  type: string;
  multi_select: Multi_select[];
}

export interface Link {
  id: string;
  type: string;
  url: string;
}

export interface DateDetail {
  start: string;
  end: string | null;
  time_zone?: any;
}

export interface Date {
  id: string;
  type: string;
  date: DateDetail;
}

export interface Text {
  content: string;
  link?: any;
}

export interface Annotation {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Title {
  type: string;
  text: Text;
  annotations: Annotation;
  plain_text: string;
  href?: any;
}

export interface Name {
  id: string;
  type: string;
  title: Title[];
}

export interface Property {
  introduce: Introduce;
  skill: Skill;
  link: Link;
  date: Date;
  name: Name;
}

export interface  RootObject {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: Created_by;
  last_edited_by: Last_edited_by;
  cover: Cover | null;
  icon?: any;
  parent: Parent;
  archived: boolean;
  properties: Property;
  url: string;
}

// "default", "gray", "brown", "red", "orange", "yellow", "green", "blue", "purple", "pink"
export enum _SKILLS {
  "default" = "bg-cyan-800",
  "gray" = "bg-gray-400",
  "brown" = "bg-amber-800",
  "red" = "bg-red-600",
  "orange" = "bg-orange-600",
  "yellow" = "bg-yellow-500",
  "green" = "bg-green-600",
  "blue" = "bg-blue-700",
  "purple" = "bg-purple-700",
  "pink" = "bg-pink-500",
}
