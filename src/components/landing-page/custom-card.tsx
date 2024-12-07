import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent,  CardFooter } from '../ui/card';
import { cn } from '../../lib/utils';

type CardProps = React.ComponentProps<typeof Card>;
type CustomCardProps = CardProps & {
  cardHeader?: React.ReactNode;
  cardFooter?: React.ReactNode;
  cardContent?: React.ReactNode;
};

const CustomCard: React.FC<CustomCardProps> = ({
  className,
  cardHeader,
  cardFooter,
  cardContent,
  ...props
}) => {
  return (
    <Card
    className={cn('w-[300px]', className)}
      {...props}
    >
      <CardHeader>
        {cardHeader}
      </CardHeader>
      <CardContent className='grid gap-4'>
        {cardContent}
      </CardContent>
      <CardFooter>
        {cardFooter}
      </CardFooter>
    </Card>
  )};

export default CustomCard;
