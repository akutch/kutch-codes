import { trigger, transition, style, animate } from '@angular/animations';

export const growAndFadeInOutAnimaiton = trigger(
    'growAndFadeInOutAnimaiton',
    [
        transition(
            ':enter', [
                style({ opacity: 0, transform: 'scale(0.5)' }),
                animate(
                    '300ms ease-in-out',
                    style({ opacity: 1, transform: 'scale(1)' })
                )
            ]
        ),
        transition(
            ':leave', [
                style({ opacity: 1, transform: 'scale(1)' }),
                animate(
                    '0ms ease-in-out',
                    style({ opacity: 0, transform: 'scale(0.5)' }),
                )
            ]
        )
    ]
);