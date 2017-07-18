import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInFastAnimation = trigger(
    'fadeInFastAnimation',
    [
        transition(
            ':enter', [
                style({ opacity: 0 }),
                animate(
                    '300ms',
                    style({ opacity: 1 })
                )
            ]
        )
    ]
);