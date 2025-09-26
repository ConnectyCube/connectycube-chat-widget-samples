import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatWidget } from './components/chat-widget/chat-widget';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChatWidget],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Chat Widget demo (Angular)');
}
