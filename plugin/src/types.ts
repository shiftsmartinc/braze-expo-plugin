export type ConfigProps = {
  androidApiKey: string;
  iosApiKey: string;
  customEndpoint: string;
  fcmSenderID?: string;
  sessionTimeout?: number;
  enableSdkAuthentication?: boolean;
  logLevel?: number;
  enableGeofence?: boolean;
  minimumTriggerIntervalInSeconds?: number;
  enableAutomaticLocationCollection?: boolean;
  enableAutomaticGeofenceRequests?: boolean;
  dismissModalOnOutsideTap?: boolean;
};
