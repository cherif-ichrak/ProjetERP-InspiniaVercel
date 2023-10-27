import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-joueurs",
  templateUrl: "./joueurs.component.html",
  styleUrls: ["./joueurs.component.css"],
})
export class JoueursComponent {
  selectedOption: string = "option1"; // Option par défaut
  selectedImage: string | ArrayBuffer | null = null;
  selectedLicence: string | ArrayBuffer | null = null;
  selectedPass: string | ArrayBuffer | null = null;
  selectedContart: string | ArrayBuffer | null = null;
  downloadLink: string | undefined;
  onFile(event: any) {
    const file = event?.target?.files[0];
    if (file) {
      this.downloadLink = URL.createObjectURL(file);
    }
  }
  onFileChange(event: any) {
    const file = event?.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedImage = e.target?.result || null; // Vérification de nullabilité
      };
      reader.readAsDataURL(file);
    }
  }
  onFileLicence(event: any) {
    const file = event?.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedLicence = e.target?.result || null; // Vérification de nullabilité
      };
      reader.readAsDataURL(file);
    }
  }
  onFilePass(event: any) {
    const file = event?.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedPass = e.target?.result || null; // Vérification de nullabilité
      };
      reader.readAsDataURL(file);
    }
  }
  onFileContrat(event: any) {
    const file = event?.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedContart = e.target?.result || null; // Vérification de nullabilité
      };
      reader.readAsDataURL(file);
    }
  }
}
