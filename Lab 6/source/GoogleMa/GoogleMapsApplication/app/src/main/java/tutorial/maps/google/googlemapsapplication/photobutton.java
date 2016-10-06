package tutorial.maps.google.googlemapsapplication;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

/**
 * Created by polavarapu on 10/2/2016.
 */
public class photobutton extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //getActionBar().setTitle("Capture image");
        setContentView(R.layout.activity_photobutton);

}

    public void onImageGalleryClicked(View v) {
        Intent redirect = new Intent(photobutton.this, photogallery.class);
        startActivity(redirect);
    }


    public void onPhotoclicked(View v) {
        Intent redirect = new Intent(photobutton.this, PhotoActivity.class);
        startActivity(redirect);
    }

}
