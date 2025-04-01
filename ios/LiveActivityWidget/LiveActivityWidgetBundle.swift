//
//  LiveActivityWidgetBundle.swift
//  LiveActivityWidget
//
//  Created by Avanthik M on 13/03/25.
//

import WidgetKit
import SwiftUI

@main
struct LiveActivityWidgetBundle: WidgetBundle {
    var body: some Widget {
        LiveActivityWidget()
        LiveActivityWidgetControl()
        LiveActivityWidgetLiveActivity()
    }
}
