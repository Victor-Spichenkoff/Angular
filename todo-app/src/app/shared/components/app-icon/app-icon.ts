import { Component, input } from '@angular/core'
import {
    LucideIcon,
    LucideHouse,
    LucideSettings,
    LucideUser,
    LucideSearch,
    LucideBell,
    LucideTrash,
    LucidePencil,
    LucidePlus,
    LucideX,
    LucideCheck,
    LucideCircleAlert,
    LucideInfo,
    LucideChevronDown,
    LucideArrowLeft, LucideDynamicIcon,
} from '@lucide/angular'
import { IconColor, IconSize } from './app-icon.types'



const ICONS = {
    home: LucideHouse,
    settings: LucideSettings,
    user: LucideUser,
    search: LucideSearch,
    bell: LucideBell,
    trash: LucideTrash,
    edit: LucidePencil,
    plus: LucidePlus,
    close: LucideX,
    check: LucideCheck,
    alert: LucideCircleAlert,
    info: LucideInfo,
    chevronDown: LucideChevronDown,
    arrowLeft: LucideArrowLeft,
} as const

type IconName = keyof typeof ICONS


@Component({
    imports: [LucideDynamicIcon],
    selector: 'app-icon',
    styleUrl: './app-icon.css',
    templateUrl: './app-icon.html',
})
export class AppIcon {
    name = input.required<IconName>()

    size = input<IconSize>('md')

    color = input<IconColor>('default')

    label = input<string>()

    readonly sizeMap: Record<IconSize, number> = {
        xs: 14,
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
    }

    readonly colorMap: Record<IconColor, string> = {
        default: 'currentColor',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
    }

    get iconData() {
        return ICONS[this.name()]
    }

    get colorValue(): string {
        return this.colorMap[this.color()]
    }
}
