package br.com.marcosfelipe.site.application.lead;

import br.com.marcosfelipe.site.domain.lead.Lead;
import br.com.marcosfelipe.site.domain.lead.LeadRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class CreateLeadServiceTest {

    @Mock
    private LeadRepository leadRepository;

    @InjectMocks
    private CreateLeadService createLeadService;

    @Test
    void shouldPersistLeadWithNormalizedEmail() {
        when(leadRepository.save(org.mockito.ArgumentMatchers.any(Lead.class))).thenAnswer(invocation -> {
            Lead lead = invocation.getArgument(0);
            lead.prePersist();
            return lead;
        });

        CreateLeadResult result = createLeadService.execute(
            new CreateLeadCommand("Marcos", "Felipe", "TESTE@EMAIL.COM", "(11) 99999-9999")
        );

        ArgumentCaptor<Lead> captor = ArgumentCaptor.forClass(Lead.class);
        verify(leadRepository).save(captor.capture());

        assertEquals("teste@email.com", captor.getValue().getEmail());
        assertEquals("2026-04-20-v1", captor.getValue().getConsentTextVersion());
        assertEquals("2026-04-20-v1", captor.getValue().getPrivacyPolicyVersion());
        assertNotNull(result.id());
        assertEquals("Lead cadastrado com sucesso.", result.message());
    }
}
