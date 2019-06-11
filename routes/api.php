<?php

Route::group(['middleware' => 'guest:api', 'namespace' => 'Api'], function () {
    Route::post('login', 'Auth\LoginController@login')->name('api.login');
});

Route::group(['middleware' => 'auth:api', 'namespace' => 'Api'], function () {
    Route::get('/user', function () {
        return request()->user();
    });

    Route::post('logout', 'Auth\LoginController@logout')->name('api.logout');
});
