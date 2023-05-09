<img src="https://brokerchooser.com/images/logo.svg" alt="BrokerChooser logo">

## BrokerChooser Senior Backend Developer Homework

Congratulations on getting to this part of our interview process!

Here you can find a basic Laravel project configured with some extra features.

Your task is to design and implement a basic [A/B testing](https://en.wikipedia.org/wiki/A/B_testing) system.

This application already starts a basic session in the database for visitors and is capable of adding events to these sessions.

Requirements:
- An A/B test has a name and 2 or more variants
- Variants have a name and a targeting ratio. The system decides which variant to select for a given A/B test based on the targeting ratios (compared to each other)
- Example: variant A (targeting ratio: 1), variant B (targeting ratio: 2) - in this case, variant B is 2 times more likely to be selected than variant A
- An A/B test can be started and stopped, after stopping, it cannot be restarted
- At the same time, more A/B tests can run simultaneously
- When an A/B test is running:
    - new sessions should be assigned to one of the variants of the A/B test
    - the site should behave according to the variant selected
    - the site should behave consistently in a given session, i.e. it should not behave according to variant A at first and then according to variant B later

After implementing the above system, create an A/B test (you can use a migration to start it) and demonstrate the usage of the system by changing some behaviour of the site (that is visible to the visitors) based on the A/B test variant.

Disclaimer: BrokerChooser already has a more robust version of this A/B testing system implemented, we do not expect you to work for us before we hire you. :)
