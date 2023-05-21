import { InjectionToken } from "@angular/core";
import { RetryConfig } from "rxjs";

export const RETRY_INTERCEPTOR_CONFIG = new InjectionToken<RetryConfig>(
  'retryConfig',
  {
    providedIn: 'root',
    factory: () => {
      return { count: 3, delay: 1000 } as RetryConfig;
    }
  }
)
