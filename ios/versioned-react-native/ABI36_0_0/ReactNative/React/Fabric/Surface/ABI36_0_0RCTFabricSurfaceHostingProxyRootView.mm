/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "ABI36_0_0RCTFabricSurfaceHostingProxyRootView.h"

#import "ABI36_0_0RCTFabricSurface.h"

@implementation ABI36_0_0RCTFabricSurfaceHostingProxyRootView

+ (ABI36_0_0RCTSurface *)createSurfaceWithBridge:(ABI36_0_0RCTBridge *)bridge
                             moduleName:(NSString *)moduleName
                      initialProperties:(NSDictionary *)initialProperties
{
  return (ABI36_0_0RCTSurface *)[[ABI36_0_0RCTFabricSurface alloc] initWithBridge:bridge
                                                     moduleName:moduleName
                                              initialProperties:initialProperties];
}

@end
