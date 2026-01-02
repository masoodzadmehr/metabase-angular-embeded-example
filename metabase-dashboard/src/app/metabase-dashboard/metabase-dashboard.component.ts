import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-metabase-dashboard',
  templateUrl: './metabase-dashboard.component.html',
  styleUrls: ['./metabase-dashboard.component.css']
})
export class MetabaseDashboardComponent {
  // Signal to hold the question ID
  questionId = signal<number>(113);
  
  // Signal to hold the Metabase URL
  metabaseUrl = signal<string>('http://localhost:3000');
  
  // Signal to hold the Metabase secret key
  metabaseSecretKey = signal<string>('94c687ef43526a08e8568c87df4c3247302db20a44d471a13dd7423d2907b965');
  
  // Signal for iframe URL - this will be computed based on questionId
  iframeUrl = computed(() => {
    // In a real implementation, we would generate the JWT token here
    // For now, we'll create a placeholder URL since we can't install the JWT package
    return `${this.metabaseUrl()}/embed/question/#question=${this.questionId()}&bordered=true&titled=true`;
  });
  
  // Method to update the question ID
  updateQuestionId(newId: string) {
    const id = parseInt(newId, 10);
    if (!isNaN(id)) {
      this.questionId.set(id);
    }
  }
}