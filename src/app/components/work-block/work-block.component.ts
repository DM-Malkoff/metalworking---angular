import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-work-block',
  standalone: true,
  imports: [],
  templateUrl: './work-block.component.html',
  styleUrl: './work-block.component.scss'
})
export class WorkBlockComponent {
  @Input() public imageName: string;
  @Input() public serviceName: string;
}
