import { CommunityProps } from 'shared/models';
import { communityImages } from 'assets/images/community';

export const Communities: CommunityProps[] = [
  {
    image: communityImages.community1,
    title: '@buzzfeedfood',
    message:
      'It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good 🌮. Find the recipe from the link in our bio! 📸: @taylormillerphoto',
    comments: 60,
    hearts: 14.7
  },
  {
    image: communityImages.community2,
    title: '@love_food',
    message:
      'IWaffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [📷: @foodwithmichel] #lovefood',
    comments: 789,
    reversed: true,
    hearts: 99.7
  },
  {
    image: communityImages.community3,
    title: '@buzzfeedfood',
    message:
      'Getting into long weekend mode like 🍤 #pancitpalabok (📷 @jeepneynyc)',
    comments: 152,
    hearts: 18.2
  }
];
