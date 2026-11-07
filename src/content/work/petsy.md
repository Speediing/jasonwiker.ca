---
title: Petsy
date: "2017-11-19"
kind: project
dek: A swipe through adoptable animals near Calgary. The prototype used the Petfinder API, and there is an App Store build.
---

Animal shelters are filled with animals and currently are nearing their capacity. Here in Calgary our Humane Society [recently](https://globalnews.ca/news/3802921/calgary-humane-society-issues-plea-for-public-help-after-seizures/) hit full capacity. So my friends and I decided we wanted to try and find a way to help ease the pressure on animal shelters and help the animals find new homes. After some brainstorming we came up with our new app Petsy.

<figure>
  <div class="frame">
    <img src="/images/petsy1.jpg" alt="Petsy card for a cat named Mustard, with buttons to pass, open details, or save." width="750" height="1334" />
  </div>
  <figcaption>An animal to swipe</figcaption>
</figure>

Petsy is an interactive mobile application dedicated towards matching animals with potential loving homes. We are targeting animal shelters, pet owners, and breeders to put their animals up onto the app to find a potential buyer/adopter. With Petsy we hope to help streamline the pet acquisition process for both buyers and sellers of animals. The app uses an intuitive interface to “swipe” either right or left to view the profiles of animals near the user’s location.

We narrowed down the essential features needed for the beta launch of Petsy. We concluded that the main feature of Petsy would consist of a window where users could swipe right (or left) on a random adoptable dog in their area. As this would comprise our core interface, it was obvious that it needed to be both accessible and enjoyable. This main feature would consequently require several other core features, e.g., the ability to view previously saved or favorited animals, view information about listed animals, contact the breeder or shelter, etc. This streamlines the consumer process by way of linearity – everything would be fun, simple, and intuitive. The proposed MVP would be small enough to give us the opportunity to fully develop it without restricting ourselves in way of future expansion.

<figure>
  <div class="frame">
    <img src="/images/petsy2.jpg" alt="A Petsy card mid-swipe, with a heart over the animal being saved." width="750" height="1334" />
  </div>
  <figcaption>Swipe right to keep an animal</figcaption>
</figure>

Creating an account is a quintessential first step for any user of Petsy. For the MVP accounts, the primary purpose of this step is for verification of the user, though user identification will be a significant factor when users in the future list their own animals. After signing into the application with their unique credentials, users will be able customize the app’s offerings by way of filtering – this will apply to species, breed, size, location, etc. This feature enables the user to focus a specific type of animal in their search. Swiping left and right allows the user to respectively like and dislike animals via use of a familiar interface. For the purpose of making a decision, users will be able to access specific information including animal biographies, 2 descriptions, and the corresponding shelter contact details. To create a more intuitive user connection, the application features direct calling from a built-in interface. The feature of exiting the application lies within the hardware of the phone. On the iPhone, one must simply utilize the built-in app closing function by way of double-clicking the home button and swiping up on Petsy’s app screen. Animals that are disliked will be permanently removed for the user. This mitigates user frustration over the appearance of duplicates, and requires no extra input from the consumer. ‘Liked’ animals will be stored within a sub-menu tab, and organized into a gallery collection for ease of viewing.

The final UI design we developed for Petsy is an aggregate of the three most critical features outlined in our earlier designs:

1. Browsing through animals from nearby shelters using the swiping interface. The “Tinder-esque” design choice gamifies the experience and helps users discover local adoption opportunities in an enjoyable way.
2. Accessing pertinent information about animals and their shelters from the animal profile interface. This provides the user all the information needed to make an informed decision about a potential adoption.
3. Saving the profiles of potential animals. This feature allows users to plan the next steps in the adoption process outside of a single session; they can close the app, etc., while retaining previous choices for future review.

This design omits screens with seemingly boilerplate layouts, such as User Settings and User Profiles. We chose instead to focus on the design and implementation of more novel interfaces.

<figure>
  <div class="frame">
    <img src="/images/petsy3.jpg" alt="A Petsy profile for a kitten, with buttons to call or email the shelter." width="750" height="1334" />
  </div>
  <figcaption>The animal, and a way to reach the shelter</figcaption>
</figure>

The final UI was designed to adhere to six key principles:

**Aesthetic Integrity**: Petsy’s appearance and behavior integrate with its function. The swiping controls introduce an immersive and captivating aspect in the adoption process, while efficiently speeding up animal viewings and encouraging adoption (Petsy’s primary purpose).

**Consistency**: All familiar iOS standards and paradigms have been adhered to: system-provided interface elements (NavigationController, CollectionView, etc), recognizable icons, the consistent use of color, etc. Every feature and behavior incorporated in Petsy’s design is consistent with features and behaviors to which users are predisposed.

**Direct Manipulation**: Direct manipulation of onscreen content is engaging (the swiping controls) and allows users to see the immediate results of their actions.

**Feedback**: The use of familiar colors and iconography proceeding each swipe acknowledges the action and displays the results to keep the user informed.

**Metaphors**: Petsy implements views that can be moved out of the way to expose the content beneath. It allows the user to drag, swipe, and move content in the same way that they would interact with similar elements in the real world, consequently flattening the learning curve.

**User Control**: Petsy’s design puts the user in total control with familiar and predictable UI components. There is no room for user error, and even though the interface allows for destructive actions (swiping away an animal), these are confirmed and easily cancellable, even when they’re already been initiated.

<figure>
  <div class="frame">
    <img src="/images/petsy4.jpg" alt="A Petsy gallery of saved animals, with names and a few details under each photo." width="750" height="1334" />
  </div>
  <figcaption>Saved animals</figcaption>
</figure>

The team was able to succeed in creating the prototype for three reasons:

1. Identification of Core features: From the start we identified the core workflow of swiping animals and saving them then identified the most simple way of achieving this without extraneous features.
2. Strong Domain Knowledge: All of the technical members have previous experience in iOS development so after a quick refresher everyone was able to contribute and speed up development.
3. Utilization of open third party resources: We used the Petfinder API as well as an open source swipe card library to speed up creation of the MVP to quickly validate the assumptions of our business idea. Using the Petfinder API we were able to get 281,946 adoptable pets from 11,330 adoption groups in the app on launch.

**[Download Petsy in the app store](https://itunes.apple.com/us/app/petsy/id1313508114?mt=8).**
