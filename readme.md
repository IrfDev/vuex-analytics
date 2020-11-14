![enter image description here](https://images.irving.digital/vuex-analytics/logo.png)


# Vuex-Analytics { Google Analytics Plugin }

Vuex Analytics Plugin to send custom events every time you dispatch an action inside your Store


# Why? 🥸

The logic of your application is inside your Vuex Store, so why don't you measure all your data and actions directly from your store in an asynchronous way?

# How? 🤯

Literally three steps:

 1. Install plugin
 2. Install Google Analytics 
 3. Include an analytics object inside the payload of your action

# Usage / Instructions ⚙️ 🤙🏻

## Install plugin 

Inside your store file you need to add the following code:

    import VuexAnalytics from 'vuex-analytics'
    
    const store = new Vuex.Store({
	    plugins: [VuexAnalytics]
    })

First import the module, and add to the array of plugins inside the constructor of your store

## Install Google Analytics

**Inside your Google Analytics Account:**

 1. Click on settings
 2. On the property tab click on Tracking Code
	  ![](https://images.irving.digital/vuex-analytics/google-analytics.png)

 3. Copy paste tracking code inside the `<head>` tags inside your HTML file.

## Include an analytics object inside the payload of your action

Now you only have to add an analytics object inside the payload of your actions. 

### Inside your store 
*store.js*
```
const store = new Vuex.Store({
...
  actions: {
    myFirstAction ({ dispatch }}) {
      dispatch('anotherAction', {
	      analytics: {
			  action: 'play',
			  category: 'video_play',
			  label: 'Landing Page Video Play',
			  value: 1
	      }
     }
    )},
    
	anotherAction(ctx, payload){
		console.log("[Action]: anotherAction", payload, ctx)
	}
  }
})
```
### Inside your component  🧩
*YourComponent.vue*
#### With the Store Object:  🏬
```
export default {
  // ...
  methods: {
	  playVideo(){
		  this.$store.dispatch('analyticsAction', {
		    analytics: {
			  action: 'play',
			  category: 'video_play',
			  label: 'Landing Page Video Play',
			  value: 1
	      }}
	      )
	  },
  }
}

```
#### With the Action Helper:  🏬🖐🏻

```
import { mapActions } from 'vuex'

export default {
  // ...
  methods: {
	  playVideo(){
		  this.analyticsAction({
		    analytics: {
			  action: 'play',
			  category: 'video_play',
			  label: 'Landing Page Video Play',
			  value: 1
	      }})
	  },
    ...mapActions(['analyticsAction])
  }
}

```
**The only important part is to add an Analytics Object in the payload of your analytics object**

# Event Reference from Analytics

![enter image description here](https://images.irving.digital/vuex-analytics/event.png)

You can use this premade categories from Google Analytics or create your owns. 

Pro-tip: Always create your custom category events. 

Please check the Google Analytics® documentation: https://developers.google.com/analytics/devguides/collection/gtagjs/events

