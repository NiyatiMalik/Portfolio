import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-main.component.html',
  styleUrl: './portfolio-main.component.scss'
})
export class PortfolioMainComponent {

  
  email = 'niyati.malik1999@gmail.com'; 

  copyEmail() {
    navigator.clipboard.writeText(this.email)
      .then(() => this.showToast('Email copied!'))
      .catch(() => this.showToast('Failed to copy email.'));
  }

  showToast(message: string) {
    // Create toast element
    const toast = document.createElement('div');
    toast.textContent = message;

    // Style the toast (you can customize this)
    toast.style.position = 'fixed';
    toast.style.bottom = '650px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    toast.style.color = '#000000';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '8px';
    toast.style.fontSize = '20px';
    toast.style.zIndex = '9999';
    toast.style.opacity = '1';
    toast.style.transition = 'opacity 0.5s ease';

    document.body.appendChild(toast);

    // Fade out and remove after 2 seconds
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 500);
    }, 2000);
  }
}
