import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-facetime', // Cambiado el nombre del componente a 'app-facetime'
  templateUrl: './facetime.component.html',
  styleUrls: ['./facetime.component.css']
})
export class FacetimeComponent implements OnInit, AfterViewInit {

  domain: string = "meet.jit.si"; // For self-hosted use your domain
  room: any;
  options: any;
  api: any;
  user: any;

  // For Custom Controls
  isAudioMuted = false;
  isVideoMuted = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.room = 'JitsiMeetingApiExample'; // Set your room name
    this.user = {
      name: 'Coding Wall' // Set your username
    }
  }

  ngAfterViewInit(): void {
    this.options = {
      roomName: this.room,
      width: 1350,
      height: 600,
      configOverwrite: { prejoinPageEnabled: false },
      interfaceConfigOverwrite: {
        TITLE_VIEW_MAX_COLUMNS: 8
      },
      parentNode: document.querySelector('#jitsi-iframe'),
      userInfo: {
        displayName: this.user.name
      }
    }

    this.api = new JitsiMeetExternalAPI(this.domain, this.options);

    // Event handlers
    this.api.addEventListeners({
      readyToClose: this.handleClose,
      participantLeft: this.handleParticipantLeft,
      participantJoined: this.handleParticipantJoined,
      videoConferenceJoined: this.handleVideoConferenceJoined,
      videoConferenceLeft: this.handleVideoConferenceLeft,
      audioMuteStatusChanged: this.handleMuteStatus,
      videoMuteStatusChanged: this.handleVideoStatus
    });
  }
  handleClose = () => {
    console.log("handleClose");
  }

  handleParticipantLeft = async (participant: any) => {
    const data = await this.getParticipants();
  }

  handleParticipantJoined = async (participant: any) => {
    const data = await this.getParticipants();
  }

  handleVideoConferenceJoined = async (participant: any) => {
    const data = await this.getParticipants();
  }

  handleVideoConferenceLeft = () => {
    this.router.navigate(['/zoom']);
  }

  handleMuteStatus = (audio: any) => {
    console.log("handleMuteStatus", audio); // { muted: true }
  }

  handleVideoStatus = (video: any) => {
    console.log("handleVideoStatus", video); // { muted: true }
  }

  getParticipants() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.api.getParticipantsInfo()); // get all participants
      }, 500)
    });
  }
  executeCommand(command: string) {
    this.api.executeCommand(command);;
    if (command == 'hangup') {
      this.router.navigate(['/']);
    }

    if (command == 'toggleAudio') {
      this.isAudioMuted = !this.isAudioMuted;
    }

    if (command == 'toggleVideo') {
      this.isVideoMuted = !this.isVideoMuted;
    }
  }
}
