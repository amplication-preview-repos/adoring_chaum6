import * as graphql from "@nestjs/graphql";
import { CompositionResolverBase } from "./base/composition.resolver.base";
import { Composition } from "./base/Composition";
import { CompositionService } from "./composition.service";

@graphql.Resolver(() => Composition)
export class CompositionResolver extends CompositionResolverBase {
  constructor(protected readonly service: CompositionService) {
    super(service);
  }
}
