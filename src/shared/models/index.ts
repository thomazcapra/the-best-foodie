export interface Recipe {
  servings: number;
  stamp: boolean;
  title: string;
  subtitle: string;
  isBigSize: boolean;
  logo: string;
  marginTop?: string;
}

export interface CommunityProps {
  image: string;
  title: string;
  message: string;
  comments: number;
  hearts: number;
}
