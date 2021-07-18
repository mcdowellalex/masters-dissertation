#!/usr/bin/env python
import time
import os
from plantcv import plantcv as pcv

    
    
# takes in array of color intensities
#    (each number in array is the percentage of that color at that pixel intensity)
# returns a calculated avg of that color in the image
def avgColorIntensity(colorArray):
    avg = 0
    for i in range(len(colorArray)):
        avg += i * colorArray[i];
    return avg/100

def get(image):
    #image = 'plant.jpeg'
    
    pcv.params.debug = None

    # Read image
    img, path, filename = pcv.readimage(filename=image)

    # Convert RGB to HSV and extract the saturation channel
    s = pcv.rgb2gray_hsv(rgb_img=img, channel='s')

    # Threshold the saturation image
    s_thresh = pcv.threshold.binary(gray_img=s, threshold=85, max_value=255, object_type='light')

    # Median Blur
    s_mblur = pcv.median_blur(gray_img=s_thresh, ksize=5)
    s_cnt = pcv.median_blur(gray_img=s_thresh, ksize=5)

    # Convert RGB to LAB and extract the Blue channel
    b = pcv.rgb2gray_lab(rgb_img=img, channel='b')

    # Threshold the blue image
    b_thresh = pcv.threshold.binary(gray_img=b, threshold=160, max_value=255, object_type='light')
    b_cnt = pcv.threshold.binary(gray_img=b, threshold=160, max_value=255, object_type='light')

    # Fill small objects
    # b_fill = pcv.fill(b_thresh, 10)

    # Join the thresholded saturation and blue-yellow images
    bs = pcv.logical_or(bin_img1=s_mblur, bin_img2=b_cnt)

    # Apply Mask (for VIS images, mask_color=white)
    masked = pcv.apply_mask(img=img, mask=bs, mask_color='white')

    # Convert RGB to LAB and extract the Green-Magenta and Blue-Yellow channels
    masked_a = pcv.rgb2gray_lab(rgb_img=masked, channel='a')
    masked_b = pcv.rgb2gray_lab(rgb_img=masked, channel='b')

    # Threshold the green-magenta and blue images
    maskeda_thresh = pcv.threshold.binary(gray_img=masked_a, threshold=115, max_value=255, object_type='dark')
    maskeda_thresh1 = pcv.threshold.binary(gray_img=masked_a, threshold=135, max_value=255, object_type='light')
    maskedb_thresh = pcv.threshold.binary(gray_img=masked_b, threshold=128, max_value=255, object_type='light')

    # Join the thresholded saturation and blue-yellow images (OR)
    ab1 = pcv.logical_or(bin_img1=maskeda_thresh, bin_img2=maskedb_thresh)
    ab = pcv.logical_or(bin_img1=maskeda_thresh1, bin_img2=ab1)

    # Fill small objects
    ab_fill = pcv.fill(bin_img=ab, size=200)

    # Apply mask (for VIS images, mask_color=white)
    masked2 = pcv.apply_mask(img=masked, mask=ab_fill, mask_color='white')

    # Identify objects
    id_objects, obj_hierarchy = pcv.find_objects(img=masked2, mask=ab_fill)

    # Define ROI
    roi1, roi_hierarchy= pcv.roi.rectangle(img=masked2, x=100, y=100, h=200, w=200)

    # Decide which objects to keep
    roi_objects, hierarchy3, kept_mask, obj_area = pcv.roi_objects(img=img, roi_contour=roi1, 
                                                               roi_hierarchy=roi_hierarchy, 
                                                               object_contour=id_objects, 
                                                               obj_hierarchy=obj_hierarchy,
                                                               roi_type='partial')

    # Object combine kept objects
    obj, mask = pcv.object_composition(img=img, contours=roi_objects, hierarchy=hierarchy3)

    ############### Analysis ################
    
    # Find shape properties, output shape image (optional)
    #shape_imgs = pcv.analyze_object(img=img, obj=obj, mask=mask, label="default")

    # Shape properties relative to user boundary line (optional)
    #boundary_img1 = pcv.analyze_bound_horizontal(img=img, obj=obj, mask=mask, line_position=1680, label="default")

    # Determine color properties: Histograms, Color Slices, output color analyzed histogram (optional)
    pcv.analyze_color(rgb_img=img, mask=mask, hist_plot_type=None, colorspaces='all')

    # Pseudocolor the grayscale image
    #pseudocolored_img = pcv.visualize.pseudocolor(gray_img=s, mask=mask, cmap='jet')

    # Write shape and color data to results file
    #pcv.outputs.save_results(filename='results.txt')
    
    ## Build JSON object to return RGB, LAB, HSV
    
    #rgb
    red = pcv.outputs.observations['default']['red_frequencies']['value']
    green = pcv.outputs.observations['default']['green_frequencies']['value']
    blue = pcv.outputs.observations['default']['blue_frequencies']['value']
    
    #lab
    lightness = pcv.outputs.observations['default']['lightness_frequencies']['value']
    green_magenta = pcv.outputs.observations['default']['green-magenta_frequencies']['value']
    blue_yellow = pcv.outputs.observations['default']['blue-yellow_frequencies']['value']
    
    #hsv
    hue = pcv.outputs.observations['default']['hue_frequencies']['value']
    saturation = pcv.outputs.observations['default']['saturation_frequencies']['value']
    value = pcv.outputs.observations['default']['value_frequencies']['value']
    
    
    
    
    
    colorIntensities = {
        "red": avgColorIntensity(red),
        "green": avgColorIntensity(green),
        "blue": avgColorIntensity(blue),
        "lightness": avgColorIntensity(lightness),
        "greenMagenta": avgColorIntensity(green_magenta),
        "blueYellow": avgColorIntensity(blue_yellow),
        "hue": avgColorIntensity(hue),
        "saturation": avgColorIntensity(saturation),
        "value": avgColorIntensity(value)   
    }
    
    
    # clear analysis for next time
    pcv.outputs.clear()
    
    #print(colorIntensities)
    
    return colorIntensities
    
    
