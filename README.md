### Steps

1. cd to the selected framework subdirectory.

2. Run `npm install`

3. Run `npm start`

4. On a second terminal window, run the following in turn then check the caclculate the average _Requests per second_. 
   I used [Apache Bench](https://httpd.apache.org/docs/2.4/programs/ab.html) but you're free to use your prefered load testing tool.
   
   - `ab -c 300 -n 200000 http://localhost:3000/zero/params`
   - `ab -c 300 -n 200000 http://localhost:3000/one/param/first`
   - `ab -c 300 -n 200000 http://localhost:3000/two/params/first/second`
   - `ab -c 300 -n 200000 http://localhost:3000/three/params/first/second/third`
   
