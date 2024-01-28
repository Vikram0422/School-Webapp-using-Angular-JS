import { trigger, animate, transition, style, group, query , keyframes,} from '@angular/animations';

export const slideInAnimation = trigger('slideInAnimation', [
  // Transition between any two states
  transition('* <=> *', [    
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })),
    group([ 
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.05s ease-in-out', style({ transform: 'translateX()' }))
      ]),
    
    ])
  ])
])