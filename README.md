## LaunchDarkly Feature Flag Exercise

Basic one-page React app utilizing the LaunchDarkly SDK and their feature flag functionality. The page will display who the upcoming Super Bowl winner will be based on user key targeting via a feature flag.

__How to Use__

1. Clone the repository
2. `cd` into the launch_darkly_exercise repository
3. Run the following command from your terminal: `npm start`. If you experience errors here, try running `npm install` and then `npm start`
4. If you are not automatically prompted with a new browser window, go to the following url: http://localhost:3000/
5. Click on the underlined text to find out who will win the Super Bowl!

There is currently a total of six unique user keys that are being targeted by the LaunchDarkly feature flag. Those include:

- 'Los Angeles'
- 'Rams'
- 'West Coast'
- 'New England'
- 'Patriots'
- 'East Coast'

Try changing the user key value around in the `componentDidMount()` method to see the different results!
