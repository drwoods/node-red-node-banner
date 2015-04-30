/**
 * Copyright 2015 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

module.exports = {	
    editorTheme: {
        page: {
            title: "Node-RED on Raspberry Pi",
            favicon: "themes/images/raspi.ico"
            // css: "/absolute/path/to/custom/css/file"
        },
        header: {
            title: "Node-RED on Raspberry Pi",
            image: "themes/images/raspi_40x50.png", // or null to remove image
			url: "https://www.raspberrypi.org/"
        },
        deployButton: {
            type:"simple",
            label:"Save and Reload",
            icon: "themes/images/raspi.ico" // or null to remove image
        },
        menu: { // Hide unwanted menu items by id. see editor/js/main.js:loadEditor for complete list
            "menu-item-import-library": true,
            "menu-item-export-library": true,
            "menu-item-keyboard-shortcuts": true,
            "menu-item-help": {
                label: "Node-RED Help",
                url: "http://nodered.org/docs/hardware/raspberrypi.html"
            }
        },
        userMenu: true, // Hide the user-menu even if adminAuth is enabled
        login: {
            image: "themes/images/raspi_207x250.png" // a 256x256 image
        }        
    }
}
