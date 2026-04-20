package br.com.marcosfelipe.site.application.lead;

import br.com.marcosfelipe.site.domain.lead.Lead;
import br.com.marcosfelipe.site.domain.lead.LeadRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CreateLeadService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CreateLeadService.class);

    private final LeadRepository leadRepository;

    public CreateLeadService(LeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }

    @Transactional
    public CreateLeadResult execute(CreateLeadCommand command) {
        Lead lead = new Lead(
            command.firstName().trim(),
            command.lastName().trim(),
            command.email().trim().toLowerCase(),
            command.phone().trim()
        );

        Lead savedLead = leadRepository.save(lead);
        LOGGER.info("lead_created id={}", savedLead.getId());

        return new CreateLeadResult(savedLead.getId(), "Lead cadastrado com sucesso.");
    }
}
