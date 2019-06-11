<?php

use Illuminate\Http\Request;

Route::group(['middleware' => 'guest:api', 'namespace' => 'Api', 'as' => 'api.'], function () {
    Route::post('login', 'Auth\LoginController@login')->name('login');
});
