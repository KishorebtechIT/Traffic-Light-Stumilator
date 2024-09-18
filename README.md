In this project I Build a Traffic Light Simulator with Pedestrian Crossing.

install depencies using "npm install"
run app using "npm run dev"

implemented the below requirements:

 1. Traffic Light Control:
						
- Implemented a traffic light system that includes three lights: Red, Yellow, and Green.
 - The traffic light follows the sequence: Green -> Yellow -> Red -> Green.
 - Each light stay on for a specific duration (e.g., Green for 10 seconds, Yellow for 3 seconds, Red for 7 seconds).
						
2. Pedestrian Crossing:
						
- Added a pedestrian crossing button, when it's clicked, requests to change the light to Red for vehicles to allow pedestrians to cross safely.						
- If the button is clicked while the light is Green or Yellow, it wait for the current sequence to complete before switching to Red.						
- After the pedestrian crossing request, the light stay Red for an additional 5 seconds, allowing pedestrians to cross, before returning to the normal sequence.
						
3. useContext State Management:
						
- Use useContext to manage the state of the traffic light system, including the current light, pedestrian crossing request, and timers.						
- Include actions and reducers for changing the light, managing the pedestrian crossing request, and handling the timing of each light.
						
4. Timers and Delays:
						
- Using JavaScript timers (setInterval or setTimeout) within your useContext actions or middleware to handle the light transitions.						
- Ensured the timers are accurately managed in useContext, including pausing, resetting, or adjusting based on user interactions.
						
5. UI and Interactions:
						
- I Displayed the traffic light in a vertical layout with each light color represented accurately.	
- Added a button for pedestrians to request a crossing.						
- Using CSS animations or transitions to enhance the visual representation of light changes.
						
Additinally Added:
						
- Added an additional feature for emergency vehicle overrides where the light sequence can be interrupted for emergency vehicles, allowing them to pass through regardless of the current light status.						
- Implemented a countdown timer next to each light showing the remaining seconds before the light changes.
					

