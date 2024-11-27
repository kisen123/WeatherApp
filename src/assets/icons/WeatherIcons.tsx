// #############################
//
// SVG-graphics collected from https://www.svgrepo.com/vectors/weather/3 
//
// #############################



// Makes a React functional component take in
// className like a regular HTML-element
type TemperatureIconProps = {
  className?: string
}

export const TemperatureIcon: React.FC<TemperatureIconProps> = (props) => (
    <div className={props.className}>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 96 96" enable-background="new 0 0 96 96" fill="white">

		<path d="M50,58.424V47c0-1.104-0.896-2-2-2c-1.105,0-2,0.896-2,2v11.424c-1.763,0.773-3,2.531-3,4.576c0,2.757,2.243,5,5,5    c2.757,0,5-2.243,5-5C53,60.955,51.763,59.197,50,58.424z M48,64c-0.552,0-1-0.448-1-1s0.448-1,1-1c0.552,0,1,0.448,1,1    S48.552,64,48,64z"/>
		<path d="M56.009,55.459L56,30c0-4.411-3.589-8-8-8c-4.411,0-8,3.589-8,7.999l-0.01,25.46C38.08,57.492,37,60.192,37,63    c0,6.065,4.935,11,11,11c6.065,0,11-4.935,11-11C59,60.191,57.92,57.491,56.009,55.459z M48,70c-3.859,0-7-3.141-7-7    c0-1.984,0.848-3.885,2.327-5.213c0.422-0.38,0.663-0.92,0.663-1.487L44,30c0-2.206,1.794-4,4-4c2.206,0,4,1.794,4,4.001    L52.009,56.3c0,0.567,0.241,1.108,0.664,1.487C54.151,59.115,55,61.015,55,63C55,66.859,51.859,70,48,70z"/>

</svg>
    </div>
  );



  
// Makes a React functional component take in
// className like a regular HTML-element
type HumidityIconProps = {
  className?: string
}

export const HumidityIcon: React.FC<HumidityIconProps> = (props) => (
    <div className={props.className}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 96 96" enable-background="new 0 0 96 96" fill="white">

          <path 
          d="M46.481,52.698c-0.663,0.774-6.48,7.723-6.481,13.301c-0.001,2.063,0.712,4,2.006,5.455    c1.032,1.161,2.911,2.545,5.996,2.546c5.249,0,7.997-4.024,7.998-8c0.001-5.579-5.818-12.527-6.481-13.302    C48.759,51.812,47.241,51.812,46.481,52.698z M48.002,70L48,72L48.002,70c-1.286,0-2.297-0.405-3.008-1.204    C44.362,68.085,44,67.066,44,66c0.001-2.607,2.233-6.302,4-8.747c1.768,2.445,4.001,6.14,4,8.746    C51.999,67.845,50.952,70,48.002,70z"
          transform="translate(48, 72) scale(1.8) translate(-48, -72)"/>
          
          
      </svg>
    </div>
  );




// Makes a React functional component take in
// className like a regular HTML-element
type WindSpeedIconProps = {
  className?: string
}

export const WindSpeedIcon: React.FC<WindSpeedIconProps> = (props) => (
    <div className={props.className}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 96 96" enable-background="new 0 0 96 96" fill="white">

          <path d="M54,46l-30.001-0.001c-1.104,0-2,0.896-2,2s0.896,2,2,2L54,50c3.859,0,7,3.141,7,7s-3.141,7-7,7c-1.105,0-2,0.896-2,2    s0.895,2,2,2c6.065,0,11-4.935,11-11S60.065,46,54,46z"/>
          <path d="M47.999,52H24c-1.104,0-2,0.896-2,2s0.896,2,2,2h23.999c0.552,0,1,0.448,1,1s-0.448,1-1,1c-1.105,0-2,0.896-2,2    s0.895,2,2,2c2.757,0,5-2.243,5-5S50.756,52,47.999,52z"/>
          <path d="M69,38c-1.104,0-2,0.896-2,2s0.896,2,2,2c0.552,0,1,0.448,1,1s-0.448,1-1,1h-4c-1.105,0-2,0.896-2,2s0.895,2,2,2h4    c2.757,0,5-2.243,5-5S71.757,38,69,38z"/>
          <path d="M23.999,43.999L57,44c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2    c0-2.206,1.794-4,4-4c2.206,0,4,1.794,4,4s-1.794,4-4,4l-33.001-0.001c-1.104,0-2,0.896-2,2S22.895,43.999,23.999,43.999z"/>

      </svg>
    </div>
  );




// Makes a React functional component take in
// className like a regular HTML-element
type OverallConditionIconProps = {
  className?: string
}

export const OverallConditionIcon: React.FC<OverallConditionIconProps> = (props) => (
  <div className={props.className}>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 96 96" enable-background="new 0 0 96 96" fill="#eee">

        <path d="M69.24,40.488C72.173,37.886,74,34.094,74,30c0-1.104-0.896-2-2-2c-5.514,0-10-4.486-10-10c0-1.104-0.896-2-2-2    c-7.078,0-12.931,5.284-13.857,12.111c-6.848,0.737-12.533,5.488-14.454,12.072C31.112,40.079,30.507,40,30,40    c-6.065,0-11,4.935-11,11s4.935,11,11,11h36c6.065,0,11-4.935,11-11C77,46.062,73.728,41.875,69.24,40.488z M58.168,20.168    c0.934,5.985,5.675,10.728,11.66,11.664c-0.615,3.246-2.84,6.006-5.862,7.326c-2.154-5.948-7.447-10.206-13.792-11.008    C50.933,24.111,54.126,20.92,58.168,20.168z M66,58H30c-3.859,0-7-3.141-7-7s3.141-7,7-7c0.277,0,0.724,0.068,1.194,0.162V46    c0,1.104,0.896,2,2,2s2-0.896,2-2v-3.224C36.269,36.525,41.631,32,48,32c6.372,0,11.736,4.53,12.808,10.787V46    c0,1.104,0.896,2,2,2s2-0.896,2-2v-1.837C65.278,44.069,65.726,44,66,44c3.859,0,7,3.141,7,7S69.859,58,66,58z"/>

    </svg>
  </div>
);